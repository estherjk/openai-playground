import { Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { BaseLayout } from '@src/layouts';

const IndexPage = () => {
  const title = 'OpenAI Playground';

  return (
    <BaseLayout title={title}>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <Heading mt={32}>{title}</Heading>
        <Text fontSize={'2xl'}>Playing with the OpenAI APIs</Text>
        <List mt={8}>
          <ListItem pb={2}>
            <Link href="/playground/text">
              <Text textDecoration={'underline'}>Text Completions</Text>
            </Link>
          </ListItem>
          <ListItem pb={2}>
            <Link href="/playground/image">
              <Text textDecoration={'underline'}>Image Generation</Text>
            </Link>
          </ListItem>
        </List>
      </Flex>
    </BaseLayout>
  );
};

export default IndexPage;
