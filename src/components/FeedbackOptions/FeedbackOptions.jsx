import { Button, List, ListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <ListItem key={option}>
            <Button onClick={onLeaveFeedback}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
