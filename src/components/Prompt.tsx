import React, { useState } from 'react';
import { Box, Button, Text, Textarea } from '@chakra-ui/react';

import { requestText } from '@src/services';

export const Prompt = () => {
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
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Enter a few words to create a custom greeting."
          value={value}
          onChange={handleChange}
        />
        <Button mt={4} colorScheme={'blue'} isLoading={isLoading} type="submit">
          Submit
        </Button>
      </form>
      <Box mt={4}>{renderResult()}</Box>
    </div>
  );
};
