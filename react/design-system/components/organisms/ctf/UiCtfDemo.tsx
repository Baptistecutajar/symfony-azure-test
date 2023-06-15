import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import { UiButton } from '@fui/components/atoms/button/UiButton';

export interface UiCtfDemoProps {
  title: string;
  additionnalAttributes?: Record<string, string> | null;
  link?: string;
  content?: ReactNode | string;
  persons: {
    id: string;
    name: string;
  }[];
}
export const UiCtfDemo = ({
  title,
  content,
  persons = [],
  additionnalAttributes = {},
  link,
}: UiCtfDemoProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent {...additionnalAttributes}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        {content}
        <List>
          {persons.map(p => (
            <ListItem key={p.id}>{p.name}</ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <UiButton href={link}>Learn More</UiButton>
      </CardActions>
    </Card>
  );
};
