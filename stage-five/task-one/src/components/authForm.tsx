export const AuthForm: React.FC<{}> = () => {
    return (
        <form>
            <label>Email</label>
            <input
                type="email"
                placeholder="Enter your email address"
            />
            <label>Password</label>
            <input
                type="password"
                placeholder="Enter your Password"
            />
        </form>
    )
}