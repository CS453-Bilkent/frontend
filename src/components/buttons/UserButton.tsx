import { Avatar, Group, Text, UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { forwardRef } from 'react';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  name: string;
  email: string;
  image?: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => {
    const { colorScheme } = useMantineColorScheme();
    return (
      <UnstyledButton
        ref={ref}
        style={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.md,
          color: colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          maxWidth: 300,

          '&:hover': {
            backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
        {...others}
      >
        <Group>
          <Avatar src={image || null} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon || <IconChevronRight size="1rem" />}
        </Group>
      </UnstyledButton>
    );
  }
);

export default UserButton;
