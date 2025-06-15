import { getAdapter } from "@brz-fivem-sdk/common/thirdparties";
import {
  qbCoreAdapter as qbCoreClientAdapter,
  oxLibAdapter as oxLibAClientdapter,
} from "./adapters/notification.adapter";
import { NotificationClientAdapter } from "@brz-fivem-sdk/common/notification";

declare const SETTINGS: any;

type AdapterName = "qbCore" | "oxLib";

const enabledAdapter: AdapterName = SETTINGS.NOTIFICATION_SYSTEM || "oxLib";

type NotificationAdapters = {
  [key in AdapterName]: NotificationClientAdapter;
};

const getClientAdapter = () =>
  getAdapter<NotificationAdapters, NotificationClientAdapter>(
    {
      qbCore: qbCoreClientAdapter,
      oxLib: oxLibAClientdapter,
    },
    enabledAdapter
  );

export const notify = (message: string, type: "success" | "error") =>
  getClientAdapter().notify(message, type);
