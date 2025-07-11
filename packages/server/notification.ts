import {
  oxLibAdapter as oxLibAServerdapter,
  qbCoreAdapter as qbCoreServerAdapter,
} from "./adapters/notification.adapter";
import { NotificationServerAdapter } from "@brz-fivem-sdk/common/notification";
import { getAdapter } from "@brz-fivem-sdk/common/thirdparties";

declare const SETTINGS: any;

type AdapterName = "qbCore" | "oxLib";

const enabledAdapter: AdapterName = SETTINGS.NOTIFICATION_SYSTEM || "oxLib";

type NotificationAdapters = {
  [key in AdapterName]: NotificationServerAdapter;
};

const getServerAdapter = () =>
  getAdapter<NotificationAdapters, NotificationServerAdapter>(
    {
      qbCore: qbCoreServerAdapter,
      oxLib: oxLibAServerdapter,
    },
    enabledAdapter
  );

export const notify = (
  source: number,
  message: string,
  type: "success" | "error"
) => {
  console.log(`Notification: ${message} | Type: ${type} | Source: ${source}`);
  return getServerAdapter().notify(source, message, type);
};
