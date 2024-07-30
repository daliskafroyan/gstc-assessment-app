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