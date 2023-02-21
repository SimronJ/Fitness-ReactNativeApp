// custom hooks

import { useEffect, useState } from "react";
import { Platform } from "react-native";
import { PurchasesOffering } from "react-native-purchases";
import { CustomerInfo } from "react-native-purchases/dist/customerInfo";
import Purchases, { LOG_LEVEL } from "react-native-purchases/dist/purchases";

const APIKeys = {
  APPLE: process.env.APPLE as string,
  GOOGLE: process.env.GOOGLE as string,
};

const typesOfMembership = {
  monthly: "proMonthly",
  yearly: "proYearly",
};

function useRevenueCat() {
  const [currentOffering, setCurrentOffering] =
    useState<PurchasesOffering | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  const isProMember = customerInfo?.entitlements.active.pro;

  useEffect(() => {
    const fetchData = async () => {
      Purchases.setLogLevel(LOG_LEVEL.DEBUG);
      if (Platform.OS == "android") {
        await Purchases.configure({ apiKey: APIKeys.GOOGLE });
      } else {
        await Purchases.configure({
          apiKey: APIKeys.APPLE,
        });
      }

      const offerings = await Purchases.getOfferings();
      const customerInfo = await Purchases.getCustomerInfo();

      setCustomerInfo(customerInfo);
      setCurrentOffering(offerings.current);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const customerInfoUpdated = async (purchaseInfo: CustomerInfo) => {
      setCustomerInfo(purchaseInfo);
    };

    Purchases.addCustomerInfoUpdateListener(customerInfoUpdated);
  }, []);

  return { currentOffering, customerInfo, isProMember };
}

export default useRevenueCat;
