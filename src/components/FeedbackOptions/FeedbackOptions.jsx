import { Button, List, ListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
          {options.map(name => {
        return (
          <ListItem key={name}>
            <Button onClick={() => onLeaveFeedback(name)}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
