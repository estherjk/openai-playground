import React, { useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';

import { requestText } from '@src/services';

export const Prompt = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh
    event.preventDefault();

    setResult('Processing...');
    const data = await requestText(value);
    setResult(data.result);
  };

  const renderResult = () => {
    return result.split('\n').map((item, index) => {
      return <Text key={index}>{item}</Text>;
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter a few words to create a custom greeting."
          value={value}
          onChange={handleChange}
        />
      </form>
      <Box mt={4}>{renderResult()}</Box>
    </div>
  );
};
