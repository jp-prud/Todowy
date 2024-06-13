import React from 'react';

import { getRangeDate } from '@utils';

import { Box, Text } from '@components';

export function DataPickerSection() {
  const currentDate = new Date();
  const weeklyRange = getRangeDate(currentDate);
  const currentDay = new Date().getDate();

  return (
    <Box
      justifyContent="center"
      flexDirection="row"
      gap="s8"
      py="s24"
      height={116}
      backgroundColor="grayBackground">
      {weeklyRange.map(date => {
        const isCurrentDayEqualToDateDay = String(currentDay) === date.day;

        return (
          <Box
            key={date.day}
            width={44}
            height={48}
            py="s4"
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: isCurrentDayEqualToDateDay
                ? 'rgba(117, 110, 243, 0.15)'
                : 'white',
            }}
            borderRadius="s8">
            <Text
              semiBold
              color={isCurrentDayEqualToDateDay ? 'primary' : 'text'}>
              {date.day}
            </Text>
            <Text
              semiBold
              preset="paragraphCaption"
              color={isCurrentDayEqualToDateDay ? 'primary' : 'subtext'}>
              {date.weekdayName}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}
