# Firebase repositories

Set of Firebase repositories that allow to do CRUD operations.

## Usage

```typescript
import AccountRepository from "./domain/repositories/account";
import {DB} from "./firebase/configApp";
import {ICreateAccount, IUpdateAccount} from "./domain/models/account";
import {Collections} from "./domain/repositories";

const accountRepository = new AccountRepository(DB, Collections.Accounts)
// this works too ==> new AccountRepository(DB)

// create
const req: ICreateAccount = {
    firstName: 'foo',
    lastName: 'bar',
    certified: true,
    activated: true,
    birthdate: new Date(),
    email: 'foo@bar.com',
    password: 'jesuisduràtrouver',
    phoneNumber: '+3365278765',
    roles: ['USER'],
    addressID: 'abcde',
    createdAt: new Date(),
    updatedAt: new Date()
}

try {
    const res = await accountRepository.Create(req)
} catch (e) {
    console.error(e)
}

// update
const updateReq: IUpdateAccount = {
    password: '222'
}

try {
    const res = await accountRepository.Update('HsR7tjPzvOyuUsW5JJr0', updateReq)
} catch (e) {
    console.error(e)
}

// delete
try {
    const res = await accountRepository.Delete('HsR7tjPzvOyuUsW5JJr0')
} catch (e) {
    console.error(e)
}

// get
try {
    const res = await accountRepository.Get('VJ3QR4pP1Wf2k8rKUVEX')
} catch (e) {
    console.error(e)
}

// list
try {
    const res = await accountRepository.List()
} catch (e) {
    console.error(e)
}
```