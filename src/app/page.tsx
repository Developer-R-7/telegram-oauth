"use client";

import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Telegram } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";

export default function Home() {
  const [isMevProtectionEnabled, setIsMevProtectionEnabled] = useState(false);
  const [tab, setTab] = useState<"buy" | "sell">("buy");

  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      tokenAddress: "",
      buyAmount: 0,
      sellAmount: 0,
      sellPercentage: 0,
      sellPriorityFee: 0,
      sellSlippageLimit: 0,
      isMevProtectionEnabled: false,
    },
  });

  return (
    <div className="flex h-screen flex-col">
      <nav className="flex w-full justify-between p-10">
        <div className="flex grow" />
        <a href="https://oauth.telegram.org/auth?bot_id=7139668898&origin=https%3A%2F%2Ftelegram-oauth-sigma.vercel.app&embed=1&request_access=write&return_to=https%3A%2F%2Ftelegram-oauth-sigma.vercel.app%2F">
          <Button size="lg" className="font-semibold">
            <Telegram /> Connect
          </Button>
        </a>
      </nav>
      <main className="flex grow flex-col items-center justify-center gap-5">
        <Tabs defaultValue="buy" className="w-[400px]">
          <div className="my-2 flex flex-col gap-2">
            <Label>Token Address</Label>
            <Controller
              control={control}
              name="tokenAddress"
              render={({ field }) => (
                <Input
                  placeholder="Token Address"
                  className="w-full"
                  {...field}
                />
              )}
            />
          </div>
          <TabsList className="mb-2 w-full">
            <TabsTrigger
              value="buy"
              className="grow"
              onClick={() => setTab("buy")}
            >
              Buy
            </TabsTrigger>
            <TabsTrigger value="sell" className="grow">
              Sell
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="buy"
            className="m-0 flex flex-col gap-2"
            onClick={() => setTab("sell")}
          >
            <div className="flex flex-col gap-2">
              <Label>Amount</Label>
              <Controller
                control={control}
                name="buyAmount"
                render={({ field }) => (
                  <Input
                    placeholder="Amount"
                    className="w-full"
                    type="number"
                    min={0}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="grow basis-0"
                onClick={() => setValue("buyAmount", 0.01)}
              >
                0.01
              </Button>
              <Button
                variant="secondary"
                className="grow basis-0"
                onClick={() => setValue("buyAmount", 0.02)}
              >
                0.02
              </Button>
              <Button
                variant="secondary"
                className="grow basis-0"
                onClick={() => setValue("buyAmount", 0.5)}
              >
                0.5
              </Button>
              <Button
                variant="secondary"
                className="grow basis-0"
                onClick={() => setValue("buyAmount", 1)}
              >
                1
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="sell" className="m-0 flex flex-col gap-2">
            <div className="flex items-end gap-2">
              <div className="flex grow flex-col gap-2">
                <Label>Amount</Label>
                <Controller
                  control={control}
                  name="sellAmount"
                  render={({ field }) => (
                    <Input
                      placeholder="Amount"
                      className="w-full"
                      type="number"
                      min={0}
                      {...field}
                    />
                  )}
                />
              </div>
              <Controller
                control={control}
                name="sellPercentage"
                render={({ field }) => (
                  <Input
                    className="w-20"
                    placeholder="0%"
                    type="number"
                    min={0}
                    max={100}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="grow basis-0"
                onClick={() => setValue("sellPercentage", 25)}
              >
                25%
              </Button>
              <Button
                variant="secondary"
                className="grow basis-0"
                onClick={() => setValue("sellPercentage", 50)}
              >
                50%
              </Button>
              <Button
                variant="secondary"
                className="grow basis-0"
                onClick={() => setValue("sellPercentage", 75)}
              >
                75%
              </Button>
              <Button
                variant="secondary"
                className="grow basis-0"
                onClick={() => setValue("sellPercentage", 100)}
              >
                100%
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="sell" className="w-[400px]">
          <TabsList className="mb-2 w-full">
            <TabsTrigger value="buy" className="grow" disabled>
              Buy Settings
            </TabsTrigger>
            <TabsTrigger value="sell" className="grow">
              Sell Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="buy" className="m-0 flex flex-col gap-2" />
          <TabsContent value="sell" className="m-0 flex flex-col gap-2">
            <div className="flex grow flex-col gap-2">
              <Label>Sell Priority Fee</Label>
              <Controller
                control={control}
                name="sellPriorityFee"
                render={({ field }) => (
                  <Input
                    placeholder="Prio"
                    className="w-full"
                    type="number"
                    min={0}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="flex grow flex-col gap-2">
              <Label>Sell Slippage Limit</Label>
              <Controller
                control={control}
                name="sellSlippageLimit"
                render={({ field }) => (
                  <Input
                    placeholder="Max %"
                    className="w-full"
                    type="number"
                    min={0}
                    max={100}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="flex grow flex-col gap-2">
              <Label>Sell MEV Protection</Label>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  className={cn(
                    "grow basis-0",
                    watch("isMevProtectionEnabled") && "border border-red-500",
                  )}
                  onClick={() => setValue("isMevProtectionEnabled", true)}
                >
                  Enabled
                </Button>
                <Button
                  variant="secondary"
                  className={cn(
                    "grow basis-0",
                    !watch("isMevProtectionEnabled") && "border border-red-500",
                  )}
                  onClick={() => setValue("isMevProtectionEnabled", false)}
                >
                  Disabled
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
