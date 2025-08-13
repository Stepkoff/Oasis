import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "./components/ui/input";

export const App = () => {
  return <div>


    <div className="mb-8 mt-8">
      <Button>Submit</Button>
    </div>
    <div className="">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
      </Accordion>
    </div>
    <div>
      <Input/>
    </div>
  </div>;
};
