/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DateTime, Interval } from 'luxon';
import { useQuery, gql, useMutation } from '@apollo/client';
import * as GraphQLTypes from '../generated/graphql';
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { useMemo, useState, useRef } from 'react';

import { MealPlanTopBar } from '../components/MealPlanTopBar';
import { MealPlanDates } from '../components/MealPlanDates';
import { AddRecipeToMealPlanForm } from '../components/AddRecipeToMealPlanForm';

const defaultImg = require('../images/defaultImg.jpg').default;

export const MealPlan = () => {
  const initRef = useRef<any>();

  const today = useMemo(() => DateTime.now(), []);

  const [startDate, setStartDate] = useState<DateTime>(today.startOf('week'));

  const [mealTypeAndDate, setMealTypeAndDate] = useState<{
    mealType: GraphQLTypes.MealType | null;
    date: string | null;
  }>({
    mealType: null,
    date: null,
  });

  const endDate = useMemo(() => startDate.endOf('week'), [startDate]);

  const interval = Interval.fromDateTimes(startDate, endDate)
    .splitBy({ days: 1 })
    .map((d: Interval) => d.start);

  const { data, error } = useQuery<
    GraphQLTypes.MealScheduleQuery,
    GraphQLTypes.MealScheduleQueryVariables
  >(
    gql`
      query MealSchedule($startDate: String!, $endDate: String!) {
        currentUser {
          id
          mealPlan {
            id
            schedule(startDate: $startDate, endDate: $endDate) {
              id
              date
              mealType
              recipe {
                id
                name
                imageUrl
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        startDate: startDate.toISO(),
        endDate: endDate.toISO(),
      },
    }
  );
  if (error) {
    throw error;
  }

  const [deleteMealPlanEntryMutation, { error: errorDeletingMealPlanEntry }] =
    useMutation<
      GraphQLTypes.DeleteMealPlanEntryMutationMutation,
      GraphQLTypes.DeleteMealPlanEntryMutationMutationVariables
    >(
      gql`
        mutation DeleteMealPlanEntryMutation($mealPlanEntryId: ID!) {
          deleteMealPlanEntry(mealPlanEntryId: $mealPlanEntryId) {
            id
          }
        }
      `
    );
  if (errorDeletingMealPlanEntry) {
    throw errorDeletingMealPlanEntry;
  }

  const mealPlan = data?.currentUser?.mealPlan;

  return (
    <>
      <MealPlanTopBar
        today={today}
        interval={interval}
        startDate={startDate}
        setStartDate={setStartDate}
      />

      <MealPlanDates today={today} interval={interval} />

      <div className='flex overflow-y-scroll flex-shrink flex-grow mb-5'>
        {interval.map((day) => {
          return (
            <div
              key={day.toISO()}
              className={[
                'flex-grow relative px-5 py-3 text-14',
                'after:block after:w-[1px] after:h-full after:absolute after:top-0 after:right-0',
              ].join(' ')}
              css={css`
                &:not(:last-child):after {
                  content: '';
                  background-image: linear-gradient(
                    to bottom,
                    #f1e6e2,
                    #f1e6e2 80%,
                    rgba(255, 255, 255, 0)
                  );
                }
              `}
            >
              {[
                GraphQLTypes.MealType.Breakfast,
                GraphQLTypes.MealType.Lunch,
                GraphQLTypes.MealType.Dinner,
              ].map((mealType) => {
                const mealPlanEntries = mealPlan?.schedule.filter((entry) => {
                  return (
                    entry.mealType === mealType &&
                    entry.date &&
                    day.toISODate() ===
                      DateTime.fromISO(entry.date, {
                        setZone: true,
                      }).toISODate()
                  );
                });
                return (
                  <div key={mealType}>
                    <Popover
                      placement={'auto-start'}
                      isLazy={true}
                      autoFocus={true}
                      closeOnBlur={true}
                      initialFocusRef={initRef}
                    >
                      {({ isOpen, onClose }) => (
                        <>
                          <PopoverTrigger>
                            <Button
                              className='group focus:shadow-none'
                              size='xs'
                              variant='unstyled'
                              aria-label={`add recipe to ${mealType}`}
                              onClick={() => {
                                setMealTypeAndDate({
                                  mealType,
                                  date: day.toISODate(),
                                });
                              }}
                            >
                              {mealType}
                              <AddIcon
                                className='opacity-0 group-hover:opacity-100 ml-1'
                                w={2}
                                h={2}
                              />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            width='100'
                            border='none'
                            shadow='lg'
                            borderRadius='20px'
                          >
                            {data?.currentUser?.mealPlan?.id &&
                              mealTypeAndDate?.date &&
                              mealTypeAndDate?.mealType && (
                                <AddRecipeToMealPlanForm
                                  mealPlan={data.currentUser.mealPlan}
                                  date={mealTypeAndDate.date}
                                  mealType={mealTypeAndDate.mealType}
                                  autoFocusRef={initRef}
                                  onComplete={onClose}
                                />
                              )}
                          </PopoverContent>
                        </>
                      )}
                    </Popover>
                    {mealPlanEntries?.map((entry) => (
                      <div
                        key={entry.id}
                        className='relative my-2 mx-0'
                        css={css`
                          .deleteIndicator {
                            opacity: 0;
                          }
                          &:hover {
                            .deleteIndicator {
                              opacity: 1;
                              display: flex;
                              align-items: center;
                            }
                            .recipe-title {
                              background-image: linear-gradient(
                                to bottom,
                                rgba(0, 0, 0, 0),
                                rgba(0, 0, 0, 0.15) 30%,
                                rgba(0, 0, 0, 0.35)
                              );
                            }
                          }
                        `}
                      >
                        <div className='relative rounded-xl overflow-hidden mb-2 shadow-sm hover:shadow-md pt-[100%]'>
                          <NavLink
                            to={(location) => {
                              const newQueryParams = new URLSearchParams(
                                location.search
                              );
                              newQueryParams.set(
                                'modalRecipeId',
                                entry.recipe.id
                              );

                              return {
                                ...location,
                                search: newQueryParams.toString(),
                              };
                            }}
                          >
                            <img
                              className='absolute top-0 w-full h-full object-cover'
                              src={entry.recipe.imageUrl ?? defaultImg}
                              alt=''
                            />
                            <div
                              className='recipe-title absolute bottom-0 flex text-white font-medium w-full leading-tight px-2 pt-8 pb-3'
                              css={css`
                                background-image: linear-gradient(
                                  to bottom,
                                  rgba(0, 0, 0, 0),
                                  rgba(92, 86, 86, 0.1) 30%,
                                  rgba(56, 54, 54, 0.3)
                                );
                              `}
                            >
                              {entry.recipe.name}
                            </div>
                          </NavLink>
                        </div>
                        <Button
                          className='deleteIndicator translate-x-1/3 -translate-y-1/3 absolute top-0 right-0 flex content-center items-center group'
                          size='xs'
                          variant='unstyled'
                          aria-label={`delete ${entry.recipe.name} from meal plan`}
                          disabled={!mealPlan}
                          onClick={(e) => {
                            e.preventDefault();
                            if (!mealPlan) return;
                            deleteMealPlanEntryMutation({
                              variables: {
                                mealPlanEntryId: entry.id,
                              },
                              update(cache) {
                                cache.modify({
                                  id: cache.identify(mealPlan),
                                  fields: {
                                    schedule(
                                      existingEntriesInSchedule,
                                      { readField }
                                    ) {
                                      return existingEntriesInSchedule.filter(
                                        (existingEntry: any) =>
                                          readField('id', existingEntry) !==
                                          entry.id
                                      );
                                    },
                                  },
                                });
                              },
                              optimisticResponse: {
                                deleteMealPlanEntry: {
                                  __typename: 'MealPlanEntry',
                                  id: entry.id,
                                },
                              },
                            });
                          }}
                        >
                          <div className='absolute top-0 right-0 w-full h-full bg-black bg-opacity-80 rounded-full group-hover:scale-105' />
                          <CloseIcon
                            position='relative'
                            w={2}
                            h={2}
                            color='#fff'
                          />
                        </Button>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
