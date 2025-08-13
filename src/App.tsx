import { Button } from './components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from './components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useLayoutEffect } from 'react';
import { setWindowInnerHeightIntoCssVariable } from '@/lib/utils';

export const App = () => {
    useLayoutEffect(() => {
        window.addEventListener('resize', setWindowInnerHeightIntoCssVariable);
        setWindowInnerHeightIntoCssVariable();
        return () => {
            window.removeEventListener(
                'resize',
                setWindowInnerHeightIntoCssVariable,
            );
        };
    }, []);

    return (
        <div className="bg-sky-200">
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
            <div className=" p-8 border-4 mx-4">
                <Input />
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                cum blanditiis labore natus expedita assumenda eum illo fuga,
                aperiam fugit. Aperiam nemo quod blanditiis ducimus explicabo
                eius necessitatibus eos dolor.
            </div>
        </div>
    );
};
