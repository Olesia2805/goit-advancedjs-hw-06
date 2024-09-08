/*
  You need to implement a KeyValuePair interface that describes a key-value pair. 
  Use generics so that this interface can work with any type of key and value.
*/

interface KeyValuePair <K, T> {
  key: K;
  value: T;
}

export {};