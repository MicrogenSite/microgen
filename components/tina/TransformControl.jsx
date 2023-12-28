import React, { useState, useEffect } from 'react';
import Control from './Control';
import IconOpacity from './icons/IconOpacity';
import IconRotation from './icons/IconRotation';
import IconScale from './icons/IconScale';
import NumberField from './widgets/NumberField';

const FieldRow = ({ inputValue = '', onUpdate = (value) => { value }, isMobile = false }) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  const getX = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}translate-x-`)) || `${mobilePrefix}translate-x-0`
  const [x, setX] = useState(getX() || "")
  const getY = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}translate-y-`)) || `${mobilePrefix}translate-y-0`
  const [y, setY] = useState(getY() || "")
  const getOpacity = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}opacity-`)) || `${mobilePrefix}opacity-100`
  const [opacity, setOpacity] = useState(getOpacity() || "")
  const getScale = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}scale-`)) || `${mobilePrefix}scale-100`
  const [scale, setScale] = useState(getScale() || "")
  const getRotation = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}rotation-`)) || `${mobilePrefix}rotation-0`
  const [rotation, setRotation] = useState(getRotation() || "")

  useEffect(() => {
    onUpdate(`${x} ${y} ${opacity} ${scale} ${rotation}`)
  }, [x, y, opacity, scale, rotation]);

  return (
    <>
      <div className="flex gap-2 mb-4">
        <NumberField label="X" unit="px" value={x.replace(`${mobilePrefix}translate-x-`, '')} onChange={event => setX(`${mobilePrefix}translate-x-${event.target.value}`)} />
        <NumberField label="Y" unit="px" value={y.replace(`${mobilePrefix}translate-y-`, '')} onChange={event => setY(`${mobilePrefix}translate-y-${event.target.value}`)} />
      </div>
      <div className="flex gap-2">
        <NumberField icon={<IconOpacity />} unit="%" value={opacity.replace(`${mobilePrefix}opacity-`, '')} onChange={event => setOpacity(`${mobilePrefix}opacity-${event.target.value}`)} />
        <NumberField icon={<IconScale />} unit="%" value={scale.replace(`${mobilePrefix}scale-`, '')} onChange={event => setScale(`${mobilePrefix}scale-${event.target.value}`)} />
        <NumberField icon={<IconRotation />} unit="deg" value={rotation.replace(`${mobilePrefix}rotation-`, '')} onChange={event => setRotation(`${mobilePrefix}rotation-${event.target.value}`)} />        
      </div>
      <input type="text" defaultValue={`${opacity} ${rotation}`} className="hidden" />
    </>
  )
}

export default function TransformControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}