import {
  UnstyledButton,
  UnstyledButtonProps,
  Avatar,
  Text,
  createStyles,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export function UserButton({
  image,
  name,
  email,
  icon,
  ...others
}: UserButtonProps) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <a
        href="https://www.linkedin.com/in/amira-chaabane/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        {/* <Avatar src={image} radius="xl" /> */}
        <Avatar size={40} color="blue">
          AC
        </Avatar>

        <div className="flex-1 ml-2">
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" className="text-xs font-normal">
            {email}
          </Text>
        </div>

        <IconChevronRight size="0.9rem" stroke={1.5} />
      </a>
    </UnstyledButton>
  );
}
