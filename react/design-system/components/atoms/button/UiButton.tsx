import Button, { ButtonProps } from '@mui/material/Button';
import { SxProps, useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

import { radius } from '@fui/themes/base-themes';
export type UiButtonProps = {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: ButtonProps['variant'];
  href?: ButtonProps['href'];
};
export const UiButton = ({ children, color, variant = 'contained', ...rest }: UiButtonProps) => {
  const { linkComponent } = useTheme();
  return (
    <Button
      variant={variant}
      component={rest.href ? linkComponent : 'button'}
      color={color as ButtonProps['color']}
      {...rest}
      disableElevation
      sx={UseSxStyle()}>
      {children}
    </Button>
  );
};

const UseSxStyle = (): SxProps => {
  return {
    borderRadius: radius(1),
  };
};
