import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';

import { Prompt } from '@src/components';
import { requestImage } from '@src/services';

export const ImagePrompt = () => {
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

    const data = await requestImage(value);

    setResult(data.result);
    setIsLoading(false);
  };

  const renderResult = () => {
    const isImageAvailable = !isLoading && result !== '';

    return <div>{isImageAvailable && <Image src={result} alt="Generated image" />}</div>;
  };

  return (
    <div>
      <Prompt
        placeholder="A white siamese cat"
        value={value}
        isLoading={isLoading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Box mt={4}>{renderResult()}</Box>
    </div>
  );
};
