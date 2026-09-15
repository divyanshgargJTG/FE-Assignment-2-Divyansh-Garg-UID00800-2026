import { ArrowBack, Home } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router';

import notFoundImage from '@/assets/images/github-404.png';
import Bubble from '@/components/common/Bubble';

import { colors } from '@/theme/colors';
import { pxToRem } from '@/theme/functions';

const NotFound = () => {
    return (
        <Box
            sx={(theme) => ({
                ...theme.mixins.flexCenter,
                p: theme.variables.layout.pagePadding,

                minHeight: `calc(100vh - ${theme.variables.layout.navbarHeight})`,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: colors.primary[600],
            })}
        >
            <Bubble
                sx={{
                    top: pxToRem(-120),
                    right: pxToRem(-120),
                }}
            />

            <Bubble
                sx={{
                    bottom: pxToRem(-120),
                    left: pxToRem(-120),
                }}
            />

            <Stack
                sx={(theme) => ({
                    maxWidth: theme.variables.layout.contentMaxWidth,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: theme.variables.radius.xl,
                    backgroundColor: colors.secondary[50],
                    boxShadow: theme.variables.shadows.card,

                    position: 'relative',
                    alignItems: 'center',
                    textAlign: 'center',
                    zIndex: 1,
                    width: '90%',
                    padding: {
                        xs: pxToRem(32),
                        sm: pxToRem(48),
                    },
                })}
            >
                <Box
                    component="img"
                    src={notFoundImage}
                    alt="GitHub 404 image"
                    sx={(theme) => ({
                        borderRadius: theme.variables.radius.xl,

                        width: '100%',
                        maxWidth: pxToRem(640),
                        height: 'auto',
                        objectFit: 'contain',
                        mb: pxToRem(16),
                    })}
                />

                <Typography
                    variant="h1"
                    color="primary"
                    sx={(theme) => ({
                        fontWeight: theme.variables.fontWeight.extraBold,
                        fontSize: {
                            xs: pxToRem(64),
                            sm: pxToRem(80),
                        },
                        lineHeight: 1,
                    })}
                >
                    404
                </Typography>

                <Typography
                    variant="h3"
                    sx={(theme) => ({
                        mt: pxToRem(4),
                        fontWeight: theme.variables.fontWeight.bold,
                    })}
                >
                    Page Not Found
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        maxWidth: pxToRem(576),
                        mt: pxToRem(4),
                    }}
                >
                    Looks like you've wandered into an empty repository. The page you're looking for
                    doesn't exist or may have been moved somewhere else.
                </Typography>

                <Stack
                    direction={{
                        xs: 'column',
                        sm: 'row',
                    }}
                    sx={{
                        gap: pxToRem(16),
                        mt: pxToRem(32),
                    }}
                >
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        size="large"
                        startIcon={<Home />}
                    >
                        Back to Home
                    </Button>

                    <Button
                        component={Link}
                        to="/"
                        variant="outlined"
                        size="large"
                        startIcon={<ArrowBack />}
                    >
                        Go Back
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default NotFound;
