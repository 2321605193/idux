import { mount, MountingOptions } from '@vue/test-utils'
import IxDropdown from '../src/Dropdown.vue'
import { DropdownProps } from '../src/types'

describe.skip('Dropdown.vue', () => {
  const DropdownMount = (options?: MountingOptions<Partial<DropdownProps>>) => mount(IxDropdown, { ...options })

  test('render work', () => {
    const wrapper = DropdownMount({})

    expect(wrapper.html()).toMatchSnapshot()

    expect(() => {
      wrapper.vm.$forceUpdate()
      wrapper.unmount()
    }).not.toThrow()
  })
})
