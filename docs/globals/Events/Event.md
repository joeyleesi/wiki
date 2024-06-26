import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A hook for a certain event in Minecraft

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

You may register functions to one, and those functions will be called when the event occurs

---

### <code>register()</code> \{#register}

Register a function on this event

Functions are run in registration order

An optional string argument can be given, grouping functions under that name, for an easier management later on

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
register(func)
```

**Parameters:**

| Name | Type                                                | Description | Default |
| ---- | --------------------------------------------------- | ----------- | ------- |
| func | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                        | Description               |
| ------------------------------------------- | ------------------------- |
| <code>[Event](/globals/Events/Event)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
register(func, name)
```

**Parameters:**

| Name | Type                                                | Description | Default |
| ---- | --------------------------------------------------- | ----------- | ------- |
| func | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |
| name | <code>[String](/tutorials/types/Strings)</code>     | -           | -       |

**Returns:**

| Type                                        | Description               |
| ------------------------------------------- | ------------------------- |
| <code>[Event](/globals/Events/Event)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
events.TICK:register(function() end, "Name")
```

---

### <code>clear()</code> \{#clear}

Clears the given event of all its functions

```lua
clear()
```

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
events.TICK:clear()
```

---

### <code>remove()</code> \{#remove}

Removes either a function from this event or when given a string, remove all functions registered under that name

Returns the number of functions that were removed

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
remove(name)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
remove(function)
```

**Parameters:**

| Name     | Type                                                | Description | Default |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
events.TICK:remove("Name")
```

---

### <code>getRegisteredCount()</code> \{#getRegisteredCount}

Returns the number of functions that are registered with the given name

```lua
getRegisteredCount(name)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
events.TICK:getRegisteredCount("Name")
```

---
