import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import PublicSettings from "@/components/settings/PublicSettings";
import PrivacySettings from "@/components/settings/PrivacySettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";

enum tabs {
    PUBLIC = "public",
    PRIVACY = "privacy",
    APPEARANCE = "appearance"
}

function Page() {
    return (
        <div className="bg-primary-foreground p-4 rounded-2xl">
            <Tabs defaultValue={tabs.PUBLIC}>
                <TabsList className="mb-4">
                    <TabsTrigger value={tabs.PUBLIC}>
                        Public
                    </TabsTrigger>
                    <TabsTrigger value={tabs.PRIVACY}>
                        Privacy
                    </TabsTrigger>
                    <TabsTrigger value={tabs.APPEARANCE}>
                        Appearance
                    </TabsTrigger>
                </TabsList>
                <TabsContent value={tabs.PUBLIC}>
                    <PublicSettings/>
                </TabsContent>
                <TabsContent value={tabs.PRIVACY}>
                    <PrivacySettings/>
                </TabsContent>
                <TabsContent value={tabs.APPEARANCE}>
                    <AppearanceSettings/>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Page;