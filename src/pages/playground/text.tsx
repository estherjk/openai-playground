import { Box, Flex, Heading } from '@chakra-ui/react';

import { Prompt } from '@src/components';
import { BaseLayout } from '@src/layouts';

const TextPage = () => {
  const title = 'Text Completions';

  return (
    <BaseLayout title={title}>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <Heading mt={32}>{title}</Heading>
        <Box my={8} w={'100%'}>
          <Prompt />
        </Box>
      </Flex>
    </BaseLayout>
  );
};

export default TextPage;
