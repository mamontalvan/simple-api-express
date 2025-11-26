
class Container {
    private dependecies: Map<string, any> = new Map();

    public register(key: string, dependency: any){
        this.dependecies.set(key, dependency);
    }

    public resolve(key: string){
        const dependency = this.dependecies.get(key);
        if (!dependency){
            throw new Error(`Dependency with key: ${key} not found!!`);
        }
        return dependency;
    }
}

const container = new Container();

export function resolvedInjected<T>(key: string): T {
    return container.resolve(key);
}

export function injectDependency(key: string, dependency: any) {
    container.register(key, dependency);
}