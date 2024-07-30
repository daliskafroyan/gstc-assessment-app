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

export function CBInformation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Certification Body (CB) Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-3">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="top-p">CB Name</Label>
                        <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="top-k">Address</Label>
                        <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="top-p">CB Headquarters</Label>
                        <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="top-k">Affiliate Office(s)</Label>
                        <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="top-p">Website</Label>
                        <Input id="top-p" type="number" placeholder="0.7" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="top-k">CB Main Contact</Label>
                        <Input id="top-k" type="number" placeholder="0.0" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


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