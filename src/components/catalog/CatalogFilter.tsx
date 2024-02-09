import React from 'react'
import { Accordion } from 'flowbite-react';
import { Label, Radio, TextInput } from 'flowbite-react';



export default function CatalogFilter() {
  return (
    <div >

      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <legend className="mb-4">Arama</legend>
            <TextInput id="large" type="text" sizing="md" />
            <fieldset className="flex max-w-md flex-col gap-4">
              <legend className="mb-4">Choose your favorite country</legend>
              <div className="flex items-center gap-2">
                <Radio id="united-state" name="countries" value="USA" defaultChecked />
                <Label htmlFor="united-state">United States</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="germany" name="countries" value="Germany" />
                <Label htmlFor="germany">Germany</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="spain" name="countries" value="Spain" />
                <Label htmlFor="spain">Spain</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="uk" name="countries" value="United Kingdom" />
                <Label htmlFor="uk">United Kingdom</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="china" name="countries" value="China" disabled />
                <Label htmlFor="china" disabled>
                  China (disabled)
                </Label>
              </div>
            </fieldset>

          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <TextInput id="large" type="text" sizing="lg" />
            <fieldset className="flex max-w-md flex-col gap-4">
              <legend className="mb-4">Choose your favorite country</legend>
              <div className="flex items-center gap-2">
                <Radio id="united-state" name="countries" value="USA" defaultChecked />
                <Label htmlFor="united-state">United States</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="germany" name="countries" value="Germany" />
                <Label htmlFor="germany">Germany</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="spain" name="countries" value="Spain" />
                <Label htmlFor="spain">Spain</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="uk" name="countries" value="United Kingdom" />
                <Label htmlFor="uk">United Kingdom</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="china" name="countries" value="China" disabled />
                <Label htmlFor="china" disabled>
                  China (disabled)
                </Label>
              </div>
            </fieldset>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
          <Accordion.Content>
            <TextInput id="large" type="text" sizing="lg" />
            <fieldset className="flex max-w-md flex-col gap-4">
              <legend className="mb-4">Choose your favorite country</legend>
              <div className="flex items-center gap-2">
                <Radio id="united-state" name="countries" value="USA" defaultChecked />
                <Label htmlFor="united-state">United States</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="germany" name="countries" value="Germany" />
                <Label htmlFor="germany">Germany</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="spain" name="countries" value="Spain" />
                <Label htmlFor="spain">Spain</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="uk" name="countries" value="United Kingdom" />
                <Label htmlFor="uk">United Kingdom</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="china" name="countries" value="China" disabled />
                <Label htmlFor="china" disabled>
                  China (disabled)
                </Label>
              </div>
            </fieldset>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>);
}
