import { Close, GitHub, Login, Menu } from '@mui/icons-material';
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Button,
} from '@mui/material';
import { NavLink } from 'react-router';

import { navigationItems } from '@/config/navigation';
import LogoutMenu from './LogoutMenu';

import { pxToRem } from '@/theme/functions';
import { colors } from '@/theme/colors';
import { variables } from '@/theme/variables';

import { useExpand } from '@/app/hooks';

interface MobileMenuProps {
    isAuthenticated: boolean;
    currentPath: string;
}

const MobileMenu = ({ isAuthenticated, currentPath }: MobileMenuProps) => {
    const { open, handleOpen, handleClose } = useExpand();

    const visibleNavigationItems = navigationItems.filter(
        (item) => !item.requiresAuth || isAuthenticated,
    );

    return (
        <>
            <Button
                onClick={handleOpen}
                aria-haspopup="dialog"
                aria-expanded={open}
                sx={{
                    p: 0,
                    minWidth: 0,
                }}
            >
                <Menu
                    sx={(theme) => ({
                        fontSize: theme.variables.iconSize.xl,

                        color: theme.palette.primary.dark,
                        p: 0,
                    })}
                />
            </Button>

            <Drawer
                anchor="right"
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        sx: {
                            width: '80vw',
                            backgroundColor: colors.secondary[50],
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: '80pxToRem(40),vw',
                    }}
                    role="presentation"
                >
                    <Box
                        sx={(theme) => ({
                            ...theme.mixins.flexBetween,
                            px: (theme) => theme.variables.spacing.md,
                            py: (theme) => theme.variables.spacing.sm,

                            height: theme.variables.layout.navbarHeight,
                        })}
                    >
                        <GitHub
                            sx={(theme) => ({
                                fontSize: theme.variables.iconSize.xl,

                                color: theme.palette.primary.dark,
                            })}
                        />

                        <IconButton onClick={handleClose} aria-label="Close navigation menu">
                            <Close
                                sx={(theme) => ({
                                    fontSize: theme.variables.iconSize.lg,
                                })}
                            />
                        </IconButton>
                    </Box>

                    <Divider />

                    <List
                        sx={(theme) => ({
                            ...theme.mixins.flexCenterCol,
                            height: `calc(100vh - ${theme.variables.layout.navbarHeight})`,
                            justifyContent: 'start',
                        })}
                    >
                        {visibleNavigationItems.map((item) => {
                            const Icon = item.icon;

                            if (currentPath === item.path) {
                                return null;
                            }

                            return (
                                <ListItem
                                    key={item.path}
                                    sx={(theme) => ({
                                        ...theme.mixins.flexCenterCol,
                                        fontWeight: theme.variables.fontWeight.bold,
                                    })}
                                >
                                    <ListItemButton
                                        component={NavLink}
                                        to={item.path}
                                        onClick={handleClose}
                                        sx={{
                                            gap: pxToRem(10),
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={(theme) => ({
                                                minWidth: theme.variables.spacing.xl,
                                                color: colors.secondary[900],
                                            })}
                                        >
                                            <Icon
                                                sx={{
                                                    width: pxToRem(35),
                                                    height: pxToRem(35),
                                                }}
                                            />
                                        </ListItemIcon>

                                        <ListItemText
                                            disableTypography
                                            primary={item.label}
                                            sx={(theme) => ({
                                                color: colors.secondary[900],
                                                fontWeight: 'inherit',
                                                fontSize: theme.variables.fontSize.md,
                                            })}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}

                        <Divider
                            sx={{
                                my: (theme) => theme.variables.spacing.sm,
                            }}
                        />

                        {!isAuthenticated && currentPath !== '/login' && (
                            <ListItem
                                disablePadding
                                onClick={handleClose}
                                sx={(theme) => ({
                                    ...theme.mixins.flexCenterCol,
                                    flex: 1,
                                    mt: pxToRem(20),
                                    justifyContent: 'end',
                                    mb: theme.variables.spacing.xl,
                                })}
                            >
                                <Button
                                    component={NavLink}
                                    to="/login"
                                    variant="contained"
                                    startIcon={<Login />}
                                    sx={(theme) => ({
                                        ml: theme.variables.spacing.sm,
                                        borderRadius: theme.variables.radius.pill,
                                        width: '50vw',
                                        minHeight: pxToRem(50),
                                        fontSize: pxToRem(18),
                                    })}
                                >
                                    Login
                                </Button>
                            </ListItem>
                        )}

                        {isAuthenticated && (
                            <ListItem
                                sx={(theme) => ({
                                    ...theme.mixins.flexCenterCol,
                                    px: theme.variables.spacing.sm,
                                    flex: 1,
                                    justifyContent: 'end',
                                    mb: theme.variables.spacing.xl,
                                })}
                            >
                                <LogoutMenu
                                    fun={handleClose}
                                    sx={() => ({
                                        ml: variables.spacing.sm,
                                        borderRadius: variables.radius.pill,
                                        width: '50vw',
                                        minHeight: pxToRem(50),
                                        fontSize: pxToRem(18),
                                    })}
                                />
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default MobileMenu;
