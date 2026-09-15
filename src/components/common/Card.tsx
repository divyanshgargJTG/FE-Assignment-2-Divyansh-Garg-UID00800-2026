import { colors } from '@/theme/colors';
import { Stack, styled } from '@mui/material';

export const Card = styled(Stack)(({ theme }) => ({
    ...theme.mixins.flexCenterCol,
    width: '100%',
    padding: theme.variables.spacing.xl,
    gap: theme.variables.spacing.md,
    textAlign: 'center',
    backgroundColor: colors.gray[50],
    borderRadius: theme.variables.radius.xl,
    boxShadow: theme.variables.shadows.card,
}));
