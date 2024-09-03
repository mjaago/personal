import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { appear } from "./animations";
import { Button } from "./Button";

export function Dropdown({
  children,
  value,
}: {
  children: React.ReactNode;

  value: React.ReactNode;
}) {
  return (
    <div>
      <Popover className="group">
        {({ open }) => (
          <>
            <PopoverButton
              className="flex w-full items-center justify-center"
              as={Button}
            >
              {value}
            </PopoverButton>
            <AnimatePresence>
              {open && (
                <PopoverPanel
                  static
                  as={motion.div}
                  {...appear}
                  anchor="bottom"
                  className="mt-1 w-[var(--button-width)] border border-black bg-white shadow-xl"
                >
                  {children}
                </PopoverPanel>
              )}
            </AnimatePresence>
          </>
        )}
      </Popover>
    </div>
  );
}
