import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>OpenAI Playground</title>
        <meta name="description" content="Playing with the OpenAI APIs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box maxWidth={'3xl'} mx={'auto'}>
          <Flex px={8} minHeight={'100vh'} flexDirection={'column'} alignItems={'center'}>
            <Heading mt={32}>OpenAI Playground</Heading>

            <Text fontSize={'2xl'}>Playing with the OpenAI APIs.</Text>
          </Flex>
        </Box>
      </main>

      <footer>
        <Flex
          px={8}
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
}
