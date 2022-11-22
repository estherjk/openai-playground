import { Flex, Heading, Text } from '@chakra-ui/react';

import { BaseLayout } from '@src/layouts';

const IndexPage = () => {
  const title = 'OpenAI Playground';

  return (
    <BaseLayout title={title}>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <Heading mt={32}>{title}</Heading>
        <Text fontSize={'2xl'}>Playing with the OpenAI APIs</Text>
      </Flex>
    </BaseLayout>
  );
};

export default IndexPage;
