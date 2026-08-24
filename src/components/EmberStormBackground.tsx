import { EmberStorm } from '@threeui/shaders/neuform-isolated/NeuformCraftEffects'

export function EmberStormBackground() {
  return (
    <EmberStorm
      className="ember-bg"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
