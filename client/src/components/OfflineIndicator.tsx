import { Wifi, WifiOff, RefreshCw, Clock, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

export const OfflineIndicator = () => {
  const { isOnline, connectionType, offlineDuration, isSlowConnection } = useNetworkStatus();
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    if (!isOnline && !showOfflineMessage) {
      setShowOfflineMessage(true);
    } else if (isOnline && showOfflineMessage) {
      setShowOfflineMessage(false);
    }
  }, [isOnline, showOfflineMessage]);

  const handleRefresh = () => {
    window.location.reload();
  };

  // Don't show anything if online
  if (isOnline) {
    return null;
  }

  return (
    <>
      {/* Offline status indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-2">
          <WifiOff className="w-4 h-4" />
          <span className="text-sm font-medium">You're offline</span>
          {offlineDuration && (
            <span className="text-xs bg-white/20 px-2 py-1 rounded">
              <Clock className="w-3 h-3 inline mr-1" />
              {offlineDuration}
            </span>
          )}
          <button
            onClick={handleRefresh}
            className="flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            Retry
          </button>
        </div>
      </div>

      {/* Offline message overlay */}
      {showOfflineMessage && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <WifiOff className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">No Internet Connection</h3>
                <p className="text-sm text-gray-600">
                  {connectionType !== 'unknown' && `Connection: ${connectionType}`}
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-medium text-blue-900 mb-1 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Available Offline:
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• View cached content</li>
                  <li>• Use interactive tools</li>
                  <li>• Browse training modules</li>
                  <li>• Read saved guides</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  Requires Internet:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time updates</li>
                  <li>• External images</li>
                  <li>• Network requests</li>
                  <li>• Live data sync</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
              <p className="text-xs text-amber-800">
                <strong>Tip:</strong> The app will automatically reload when your connection is restored.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setShowOfflineMessage(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors"
              >
                Continue Offline
              </button>
              <button
                onClick={handleRefresh}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Try Reconnecting
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
