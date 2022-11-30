import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { Prompt } from '@src/components';
import { requestText } from '@src/services';

export const TextPrompt = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh
    event.preventDefault();

    setResult('Processing...');
    setIsLoading(true);

    const data = await requestText(value);

    setResult(data.result);
    setIsLoading(false);
  };

  const renderResult = () => {
    return result.split('\n').map((item, index) => {
      return <Text key={index}>{item}</Text>;
    });
  };

  return (
    <div>
      <Prompt
        placeholder="Enter a few words to create a custom greeting."
        value={value}
        isLoading={isLoading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Box mt={4}>{renderResult()}</Box>
    </div>
  );
};
