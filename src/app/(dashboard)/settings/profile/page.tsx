import ChangeAvatarSection from '@/components/app/profile/ChangeAvatarSection'
import ContentSection from '@/components/app/profile/ContentSection'
import ProfileForm from '@/components/app/profile/ProfileForm'
import PageContainer from '@/components/layout/PageContainer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SettingsProfile() {
    return (
        <PageContainer isSettingsPage={true} noPadding={true}>
            {/* <ContentSection
                title='Profile'
                desc='This is how others will see you on the site.'
            > */}
            <Card >
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChangeAvatarSection />
                    <ProfileForm />
                </CardContent>
            </Card>
            {/* </ContentSection> */}
        </PageContainer>
    )
}
