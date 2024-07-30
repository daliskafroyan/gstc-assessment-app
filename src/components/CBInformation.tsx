import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CBInformation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Certification Body (CB) Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4 flex-col">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="top-p">CB Name</Label>
                            <Input id="top-p" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="top-k">Address</Label>
                            <Input id="top-k" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="top-p">CB Headquarters</Label>
                            <Input id="top-p" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="top-k">Affiliate Office(s)</Label>
                            <Input id="top-k" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="top-p">Website</Label>
                            <Input id="top-p" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="top-k">CB Main Contact</Label>
                            <Input id="top-k" />
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}