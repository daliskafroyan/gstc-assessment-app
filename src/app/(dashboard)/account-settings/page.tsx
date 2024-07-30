
import PageContainer from '@/components/layout/PageContainer';

import CBInformation from '@/components/CBInformation';


export default function AccountSettings() {
    return (
        <PageContainer>
            <h2 className="mb-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Account Settings
            </h2>
            <div
                className="relative flex-col items-start gap-8 md:flex"
            >
                <form className="grid w-full items-start gap-6">
                    <CBInformation />
                </form>
            </div>
        </PageContainer>
    );
};