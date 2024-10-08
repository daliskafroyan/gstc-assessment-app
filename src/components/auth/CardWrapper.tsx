'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import AuthHeader from './AuthHeader';
import BackButton from './BackButton';

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonHref?: string;
  backButtonLabel?: string;
  children: React.ReactNode;
}

const CardWrapper = ({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card className='w-10/12 md:w-full max-w-md border-solid shadow-none'>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {
        backButtonLabel && backButtonHref ? (
          <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref} />
          </CardFooter>
        ) : null
      }

    </Card>
  );
};

export default CardWrapper;
