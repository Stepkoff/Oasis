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
import { ThemeToggle } from './components/theme-toggle';

export const App = () => {
    useLayoutEffect(() => {
        // 100vh bug fix for ios
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
        <div className="min-h-custom-screen border-4 border-sky-400">
            <header className="p-8 bg-cyan-100 flex justify-between">
                <div>Logo</div>
                <div>
                    <ThemeToggle />
                </div>
            </header>
            <div className="mb-8 ">
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
                12313!!!!! 123
            </div>
        </div>
    );
};
