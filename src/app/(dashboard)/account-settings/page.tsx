import { protectedRoute } from '@/lib/session';
import { Bird, Rabbit, Turtle } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import PageContainer from '@/components/layout/PageContainer';
import CardWrapper from '@/components/auth/CardWrapper';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CBInformation from '@/components/CBInformation';


const InboxView = async () => {
    await protectedRoute();

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

export default InboxView;