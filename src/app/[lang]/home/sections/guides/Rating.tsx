import Icon from "@/components/Icons";
import { Reorder } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { leaderBoardScorersMapper, usersMapper } from "./const";
import { useTranslation } from "@/app/i18n/client";

let handler: NodeJS.Timeout;

const Rating = () => {
  const { t } = useTranslation();
  const [order, setOrder] = useState<{
    order: Array<{
      orderKey: keyof typeof usersMapper;
      amount: string;
    }>;
    animateState: "paused" | "playing";
    leaderboardIteration: number;
  }>({
    order: leaderBoardScorersMapper[0],
    animateState: "playing",
    leaderboardIteration: 0,
  });

  const handleMouseEnter = () => {
    handleGrouping();
  };

  const handleGrouping = () => {
    setOrder({
      animateState: "playing",
      leaderboardIteration:
        order.leaderboardIteration === 3 ? 0 : order.leaderboardIteration + 1,
      order:
        leaderBoardScorersMapper[
          order.leaderboardIteration === 3 ? 0 : order.leaderboardIteration + 1
        ],
    });
  };

  useEffect(() => {
    if (order.animateState === "playing") {
      handler = setInterval(() => handleGrouping(), 1000);
    }

    return () => {
      clearInterval(handler);
    };
  }, [order.leaderboardIteration, order.animateState, order.order]);

  return (
    <div className="transition-all p-6 lg:p-8 lg:rounded-[32px] rounded-[24px] flex flex-col gap-4 bg-light-surface-high dark:bg-dark-surface-high h-[396px] lg:h-[412px]">
      <Icon name="bar-chart" />

      <div className="flex flex-col gap-2">
        <span className="font-medium text-2xl text-light-utility-high dark:text-dark-utility-high">
          {t("guides.leaderboard.title")}
        </span>
        <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
          {t("guides.leaderboard.description")}
        </span>
      </div>
      <div className="flex-1 rounded-2xl bg-light-background-primary dark:bg-dark-background-primary px-7 lg:px-[60px] pt-[36px] overflow-hidden transition-all">
        <div className="rounded-xl bg-light-surface-high dark:bg-dark-surface-high pt-2 transition-all">
          <Reorder.Group axis="y" values={order.order} onReorder={() => {}}>
            {order.order.map((item, index) => (
              <Reorder.Item key={item.orderKey} value={item}>
                <div className="flex gap-2 px-4 py-[10px]">
                  {index === 0 && <Icon name="medal-first" />}

                  {index === 1 && <Icon name="medal-second" />}

                  {index === 2 && <Icon name="medal-third" />}

                  {index === 3 && (
                    <div className="w-6 flex justify-center items-center">
                      <span className="font-medium text-base text-light-utility-medium dark:text-dark-utility-medium">
                        4
                      </span>
                    </div>
                  )}

                  <Image
                    src={usersMapper[item.orderKey].avatar}
                    alt="avatar"
                    height={24}
                    width={24}
                    quality={100}
                  />

                  <div className="flex gap-1 items-center">
                    <span className="font-normal text-lg text-light-utility-medium dark:text-dark-utility-medium">
                      {usersMapper[item.orderKey].name}
                    </span>
                    {usersMapper[item.orderKey].isMe && (
                      <div className="rounded-full px-[6px] py-[2px] bg-light-brand-alpha dark:bg-dark-brand-alpha flex">
                        <span className="text-light-brand-primary dark:text-dark-brand-primary font-medium text-xs">
                          SƏN
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex justify-end">
                    <span className="text-light-utility-high dark:text-dark-utility-high font-medium text-lg">
                      {item.amount}
                    </span>
                  </div>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
};

export default Rating;
