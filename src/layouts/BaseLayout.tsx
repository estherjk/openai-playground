import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export const BaseLayout = (props: Props) => {
  const { title, description = 'Playing with the OpenAI APIs.', children } = props;

  return (
    <Box px={8}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box minHeight={'100vh'} maxWidth={'3xl'} mx={'auto'}>
          {children}
        </Box>
      </main>

      <footer>
        <Flex
          py={4}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          borderTop={'1px'}
          borderColor={'gray.200'}>
          <Text fontSize={'sm'}>© 2022 Esther Jun Kim</Text>
          <Link
            fontSize={'sm'}
            textDecoration={'underline'}
            href="https://github.com/estherjk/openai-playground">
            GitHub
          </Link>
        </Flex>
      </footer>
    </Box>
  );
};
