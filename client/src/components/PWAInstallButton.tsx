import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { useState } from "react";
import { usePWA } from "@/hooks/usePWA";

export const PWAInstallButton = () => {
  const { isInstallable, install, isStandalone } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  // Don't show if already installed, in standalone mode, or dismissed
  if (!isInstallable || isStandalone || dismissed) {
    return null;
  }

  const handleInstall = async () => {
    const success = await install();
    if (success) {
      console.log('PWA installed successfully');
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    // Store dismissal in localStorage to not show again
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-xs">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] rounded-lg flex items-center justify-center">
              <Download className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-900">Install App</h4>
              <p className="text-xs text-gray-600">Get offline access & push notifications</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleInstall}
            size="sm"
            className="flex-1 bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-xs"
          >
            Install
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDismiss}
            className="text-xs"
          >
            Later
          </Button>
        </div>
      </div>
    </div>
  );
};
