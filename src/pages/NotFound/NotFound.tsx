import { ArrowBack, Home } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link } from 'react-router';

import notFoundImage from '@/assets/images/github-404.png';
import Bubble from '@/components/common/Bubble';

import { pxToRem } from '@/theme/functions';
import {
    BtnBox,
    NotFoundCard,
    NotFoundDescription,
    NotFoundHeading,
    NotFoundImg,
    NotFoundSubHeading,
    NotFoundWrapper,
} from '@/components/notFound/NotFound.styles';

const NotFound = () => {
    return (
        <NotFoundWrapper>
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

            <NotFoundCard>
                <NotFoundImg component="img" src={notFoundImage} alt="GitHub 404 image" />

                <NotFoundHeading variant="h1" color="primary">
                    404
                </NotFoundHeading>

                <NotFoundSubHeading variant="h3">Page Not Found</NotFoundSubHeading>

                <NotFoundDescription variant="body1" color="text.secondary">
                    Looks like you've wandered into an empty repository. The page you're looking for
                    doesn't exist or may have been moved somewhere else.
                </NotFoundDescription>

                <BtnBox
                    direction={{
                        xs: 'column',
                        sm: 'row',
                    }}
                >
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        size="large"
                        startIcon={<Home />}
                        sx={(theme) => ({
                            borderRadius: theme.variables.radius.pill,
                        })}
                    >
                        Back to Home
                    </Button>

                    <Button
                        component={Link}
                        to="/"
                        variant="outlined"
                        size="large"
                        startIcon={<ArrowBack />}
                        sx={(theme) => ({
                            borderRadius: theme.variables.radius.pill,
                        })}
                    >
                        Go Back
                    </Button>
                </BtnBox>
            </NotFoundCard>
        </NotFoundWrapper>
    );
};

export default NotFound;
