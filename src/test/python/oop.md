#oop #封装 #继承 #多态
这里我们简单说一下python的面向对象编程。python中的一切都是对象，我们如果想更加深入了解这个语言，就必须要掌握这种思想

```py
print(type(42)) # <class 'int'> print(type("Hello")) # <class 'str'> print(type(print)) # <class 'builtin_function_or_method'> print(type(len)) # <class 'builtin_function_or_method'>
```
## 1. 封装

这是面向对象的基础，即：隐藏内部系统的细节，只向外暴露访问接口，提高系统的可维护性。

### 访问控制

为了实现隐藏的功能，需要对程序的访问进行控制，python中使用访问限制符来处理（虽然在底层上并不能限制）:

- public, 默认,不限制访问
- protect, 以单下划线开头`_age`，限制当前类和继承类中使用，但是其不限制访问
- private, 以双下划线开头`__name`，只能在当前类中使用，外部无法访问。但是可以通过`_package__attr`来访问

```py
class Person:
    def __init__(self, name, age, height):
        self.name = name
        self.__age = age
        self._height = height


class Student(Person):
    def __init__(self, name, age, height, score):
        super().__init__(name, age, height)
        self.score = score

    def display_info(self):
        print(
            f"my name is {self.name}, 
            my age is {self.__age}, 
            my height is {self._height}, 
            my score is {self.score}"
        )


p1 = Student("jack", 18, 180, 100)
p1.display_info() # AttributeError: 'Student' object has no attribute '_Student__age'

```

#### 使用getter和setter来访问私有属性

思路很简单，就是通过函数调用向外部暴露属性的读写权限。

```py
class Person: 
	def __init__(self, name, age): 
		self.__name = name 
		self.__age = age # Getter 方法 
	def get_name(self): 
		return self.__name 
	def get_age(self): 
		return self.__age # Setter 方法 
	def set_age(self, age):
		if age > 0: 
			self.__age = age 
		else:
			raise ValueError("年龄必须是正数！")
```

#### 使用@property装饰器来简化getter和setter

一句话来说，在和属性同名的函数上加上`@property`表面这是一个属性方法，可以直接通过`instance.attr`来getter，同时可以通过@attr_name.setter来模拟setter方法

```py
class Person: 
	def __init__(self, name, age): 
		self.__name = name 
		self.__age = age
		@property 
		def name(self): 
			return self.__name 
		@property 
		def age(self): 
			return self.__age 
		@age.setter 
		def age(self, value): 
			if value > 0: 
				self.__age = value 
			else: 
				raise ValueError("年龄必须是正数！")
```

## 2.继承

在python中通过使用class关键字定义就可以创建类，并可以在此基础上定义属性和函数，还可以通过继承获得父类的能力

```py
class Animal():
	def speak():
		print("ha")
		
class Dog(Animal):
	pass
	
dog = new Dog()
dog.speak() #ha
```

### 方法重写

当我们不想要父类的部分方法，并希望自己实现时，直接在子类中编写同名方法即可，会自动override父类的方法
```py
# copy class Animal
class Cat(Animal):
	def speak():
		print("miao")
		
cat = new Cat()
cat.speak() # miao
```

## 在子类中调用父类的方法

当我们希望访问父类中的属性或方法时，使用super()是一个比较好的方法

```py
class Animal: 
	def __init__(self, name): 
		self.name = name 
	def speak(self): 
		print(f"{self.name} makes a sound.") 

class Dog(Animal): 
	def __init__(self, name, breed): 
		# 使用 super() 调用父类的构造方法 
		super().__init__(name) 
		self.breed = breed 
	def speak(self):
		 super().speak() # 调用父类的 speak 方法 
		 print(f"{self.name} barks.") # 创建对象并调用方法
dog = Dog("Rex", "Golden Retriever") 
dog.speak()

```


## 3. 多态

主要指重载和重写。

### 重写

在继承关系中，父类的同名函数会被子类覆盖

## 重载

在python中，是没有专门的重载机制，即不同的参数对应的函数。但是我们可以基于可变参数来实现伪重载。

```py
class Math():
	def add(self,*args):
		if len(args) == 1:
			pass
		......

```
## 4. 抽象类

抽象类为子类定义一系列标准和接口，需要子类必须实现。
python中通过abc模块实现抽象类，而不像java使用abstract关键字。

```py
from abc import ABC, abstractmethod 
class Animal(ABC): 
	@abstractmethod 
	def make_sound(self): 
		pass 
		
	@abstractmethod 
	def move(self): 
		pass

# 子类必须实现抽象方法 
class Dog(Animal): 
	def make_sound(self): 
		return "Woof!" 
	def move(self): 
		return "The dog runs." # 尝试实例化抽象类将引发错误 # 

animal = Animal() # TypeError: Can't instantiate abstract class Animal with abstract methods make_sound, move 
dog = Dog()
print(dog.make_sound()) # 输出: Woof! print(dog.move()) # 输出: The dog runs.
```

这里还需要补充一点，抽象类允许子类部分实现抽象方法，这样的子类称为`抽象子类`其无法被实例化，如果想实例化，还是必须要实现所有的抽象方法，本质就是一个中间态。
### 接口

python中接口和抽象类很像，应该说所有的面向对象语言都是很类似。但是python中并没有单独的关键字interface来定义，他的实现方式和抽象类差不多：

```py
from abc import ABC,abstractmethod

class Drawable(ABC):
	@abstractmethod
	def draw(self):
		pass
		
class Shape(Drawable):
	def draw(self):
		return "draw a shape"

class Circle(Drawable):
	def draw(self):
		return "draw a circle"
		

# 使用接口的类
circle = Circle()
print(circle.draw())  # 输出: Drawing a circle.
```

### 抽象类和接口的区别


| 特征          | 抽象类                  | 接口                              |
| ----------- | -------------------- | ------------------------------- |
| 是否可实例化      | 不可以                  | 不可以                             |
| 是否可以包含已实现方法 | 可以                   | 不可以                             |
| 构造方法        | 包含                   | 不包含                             |
| 继承方法        | 可以继承抽象类，当然可以包含已实现的方法 | 只能继承多个接口（在 Python 中，接口通过抽象基类实现） |
| 目的          | 提供公共的标准，子类可以根据需要实现   | 仅提供方法签名，规定子类必须实现的方法             |

## 5. self

self就是指向一个类实例化后的对象，每个对象在内存中相互独立，有彼此独立的在`__init__`声明的属性。

 ### self.attr只能访问的是实例自己的属性，如果要访问类的属性则需要`class_name.attr`

self是一个关键字吗？ 他是一个约定俗成的称呼，但是必须是实例方法的第一个参数。
当然这里就引入一个新的问题：

### 实例方法，类方法和静态方法

1. 方法的第一个参数是self的为实例方法，适合核心操作
2. 使用`@classmethod`标注，并且第一个参数是`cls`，则表明是类方法，可以直接通过`class_name.func_name()`调用。适合操作类属性
3. 使用`@staticmethod`修饰符标注，不依赖cls/self，适合独立的计算

## 6. 构造和析构函数

python在创建实例时，会自动调用`__init__`方法进行初始化。这里的init函数就是构造函数。同样的，在使用del销毁实例时，python会触发`__del__`函数销毁函数。

这里有一些应用场景：
1. 文件管理
2. 数据库连接

## 7. dataclass


## 面试oop

Q：请你讲一下python中的面向对象程序设计
A:
 面向对象编程主要涉及封装继承多态这三个方面。

1. 封装（Encapsulation）

封装的主要目的是隐藏对象的内部实现细节，仅对外暴露必要的接口，从而提高代码的安全性和可维护性。

- **访问控制**：Python 通过命名约定来实现访问限制来实现封装这一能力，分三个级别：
    
    - **公开（Public）**：默认形式，如 `self.name`，可以在类内外自由访问。
        
    - **受保护（Protected）**：使用单下划线前缀，如 `_age`，示意该属性或方法仅供类及其子类使用，但外部仍可访问。
        
    - **私有（Private）**：使用双下划线前缀，如 `__income`，Python 会对其进行名称改写（name mangling，实际变为 `_ClassName__income`），从而在一定程度上限制外部直接访问，但并非完全无法访问。

2. 继承（Inheritance）

继承支持代码复用，允许子类获取父类的属性和方法，并可在此基础上进行扩展或修改。

- **基本继承**：子类自动拥有父类的功能。
    
- **方法重写**：子类可以重新定义父类的方法，以适应自身需求。
    
- **使用 `super()`**：在子类中调用父类的方法，常用于扩展而非完全替换父类行为，确保父类的逻辑得以保留。
    
- **多继承**：Python 支持多继承，通过方法解析顺序（MRO）决定方法的调用顺序，提供了灵活性的同时也需注意设计复杂度。

3. 多态（Polymorphism）

多态允许不同的类对同一方法调用做出不同的响应，提升代码的灵活性和可扩展性。

- **方法重写**：子类提供与父类同名的方法，实现具体行为的差异化。
    
- **动态绑定**：Python 在运行时根据对象的实际类型确定调用的方法，无需显式类型声明。
    
- **“伪重载”**：Python 本身不支持传统的方法重载（同一类中多个同名方法根据参数区分），但可通过可变参数（如 `*args`, `**kwargs`）或参数默认值实现类似效果。