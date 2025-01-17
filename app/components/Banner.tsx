import clsx from "clsx";
import { Card } from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { appear } from "./animations";

export function Banner({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div {...appear}>
          <Card
            className={clsx(
              "fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[2048px] -translate-x-1/2 border md:w-[calc(100%-3rem)]",
            )}
          >
            {children}
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
