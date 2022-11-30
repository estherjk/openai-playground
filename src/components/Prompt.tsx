import { Button, Textarea } from '@chakra-ui/react';

type Props = {
  placeholder: string;
  value: string;
  isLoading: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export const Prompt = (props: Props) => {
  const { placeholder, value, isLoading, onChange, onSubmit } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Textarea placeholder={placeholder} value={value} onChange={onChange} />
        <Button
          mt={4}
          colorScheme={'blue'}
          isDisabled={value === ''}
          isLoading={isLoading}
          type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
